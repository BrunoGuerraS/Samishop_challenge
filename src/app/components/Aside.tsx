import { LoadingCell } from "@/components/LoadingCell";
import { NoticeCell } from "@/components/NoticeCell";
import { ICharacter } from "@/models/ICharacters";
import { getPeopleService } from "@/service/service";
import React, { useEffect, useRef, useState } from "react";
import { DesktopComponentAside } from "./DesktopComponentAside";
import { MovileComponentAside } from "./MovileComponentAside";
interface Prop {
    isInDesktop: boolean;
}
export const Aside: React.FC<Prop> = ({ isInDesktop }) => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);
  const observerTarget = useRef(null);
  const totalPages = 10;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const nextPage = page + 1;
          if (nextPage > totalPages) {
            setLoading(false);
            setReachedEnd(true);
            return;
          }
          getPeopleService(nextPage)
            .then((data) => {
              setPage(nextPage);
              if (data) {
                setCharacters((prevCharacters) => [...prevCharacters, ...data]);
              } else {
                setLoading(false);
              }
            })
            .catch((error) => {
              setLoading(false);
              setError(true);
            });
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [page]);

  return (
    <aside className="max-w-[350px] min-w-[320px]  breakStyle">
      {characters && characters.map((character, index) => {
        return isInDesktop ? (
          <DesktopComponentAside character={character} index={index} />
        ) : (
          <MovileComponentAside character={character} index={index} />
        );
      })}
      {loading && <LoadingCell />}
      {error && <NoticeCell />}
      {reachedEnd && (
        <p className="w-full my-4 text-center text-textDarck">¡Es todo!</p>
      )}
      <div ref={observerTarget}></div>
    </aside>
  );
};