import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineLocalMovies } from "react-icons/md";
import { LiaBinocularsSolid } from "react-icons/lia";
import { Genre } from "../../types";
import { Link } from "react-router-dom";
import CartModal from "./CartModal";
import useMovieStore from "../../store/store";
import classes from "../Header/Header.module.css";

interface Props {
  onSearch: (searchedTerm?: string) => void;
  onSelectGenre: (genre: number) => void;
  genres?: Genre;
}

const Header: React.FC<Props> = ({ onSearch, onSelectGenre, genres }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [searchedTerm, setSearchedTerm] = useState<string>("");

  const { orderedMovies, favourtieMovieIdsArray } = useMovieStore();

  const handleSubmit = () => {
    onSearch(searchedTerm);
    // setSearchedTerm("");
  };

  return (
    <>
      <header className={`bg-success text-white py-3 ${classes.header}`}>
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <MdOutlineLocalMovies style={{ fontSize: "2rem" }} />
            <h1 className="ms-2 mb-0">
              <Link to="/">Movies 24</Link>
            </h1>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="d-flex align-items-center me-3"
          >
            <input
              value={searchedTerm}
              onChange={(e) => setSearchedTerm(e.target.value)}
              id="movie"
              type="text"
              autoFocus={true}
              placeholder="Search"
              className="form-control me-2"
              style={{ maxWidth: "200px" }}
            />
            <IoIosSearch
              onClick={() => handleSubmit()}
              type="submit"
              style={{ cursor: "pointer", fontSize: "1.5rem" }}
            />
          </form>
          <div className="d-flex align-items-center me-3">
            <label htmlFor="genre" className="me-2 mb-0">
              Genre:
            </label>
            <select
              onChange={(e) => onSelectGenre(parseInt(e.target.value))}
              id="genre"
              className="form-select me-2"
              style={{ maxWidth: "150px" }}
            >
              <option value="">All</option>
              {genres &&
                Object.entries(genres).map((genre) => (
                  <option key={genre[0]} value={genre[0]}>
                    {genre[1]}
                  </option>
                ))}
            </select>
            <LiaBinocularsSolid
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
            />
          </div>
          <button
            type="button"
            className="btn  me-3"
            onClick={() => setIsModalOpen(true)}
            style={{ backgroundColor: "#cee5de" }}
          >
            Cart {orderedMovies.length}
          </button>
          <Link
            to="/favourites"
            className="btn btn-link text-white fs-4 fw-bold"
          >
            Favourite Movies {favourtieMovieIdsArray.length}
          </Link>
        </div>
      </header>
      {isModalOpen && <CartModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default Header;
