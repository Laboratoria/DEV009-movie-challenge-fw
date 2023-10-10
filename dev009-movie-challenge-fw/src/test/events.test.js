import { render, screen, fireEvent } from "@testing-library/react";
import MovieFilter from "../components/MoviesFilter";


jest.mock('fetch', () => ({
  mockReturnValue: () => {
    return {
      status: 200,
      json: () => Promise.resolve([{ title: "Movie 1" }, { title: "Movie 2" }]),
    };
  },
}));

it("should call the fetch api", async () => {
  const onSetFilteredMovie = jest.fn();
  render(<MoviesFilter onSetFilteredMovie={onSetFilteredMovie} />);
  const select = screen.getByRole("select");
  select.value = "Action";
  fireEvent.change(select);
  
});