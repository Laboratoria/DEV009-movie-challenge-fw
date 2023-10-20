import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, QuerySnapshot, getDocs, query, where } from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';
import { UserService } from '../user/user.service';
import { Movie } from 'src/app/models/movie';

@Injectable({
  providedIn: 'root'
})

export class FirestoreService {
  private uid: string | null = null;

  constructor(private firestore: Firestore, private userService: UserService) {
    this.userService.getUserUID().subscribe((uid) => {
      this.uid = uid;
      console.log(this.uid);
    });
  }

  async addMovieToList(idMovie: number, pathMovie: string, collectionName: string) {
    if (!idMovie || !pathMovie || !collectionName) return;

    const collectionRef = collection(this.firestore, collectionName);
    const moviesQuery = query(collectionRef, where('uid', '==', this.uid), where('id', '==', idMovie));
    const querySnapshot = await getDocs(moviesQuery);

    (querySnapshot.size === 0)
      ? await addDoc(collectionRef, { id: idMovie, poster_path: pathMovie, uid: this.uid })
      : console.log('the movie already exists in the list');
  }

  getMovies(collectionName: string): Observable<Movie[]> {
    const collectionRef = collection(this.firestore, collectionName);
    const moviesQuery = query(collectionRef, where('uid', '==', this.uid));
    return from(getDocs(moviesQuery)).pipe(
      map((querySnapshot: QuerySnapshot) => {
        const moviesData: Movie[] = [];
        querySnapshot.forEach((doc) => {
          moviesData.push(doc.data() as Movie);
        });
        return moviesData;
      })
    );
  }
}

