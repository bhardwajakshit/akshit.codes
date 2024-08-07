import { useState, useEffect } from "react";

type FirePoint = {
  id: string;
  className: string;
  position: { x: number; y: number };
  fire: boolean;
};

const firePointsData: FirePoint[] = [
  {
    id: "point-1",
    className: "invisible dark:visible absolute top-[105px] left-12",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-2",
    className: "invisible dark:visible absolute top-[105px] right-12",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-3",
    className: "invisible dark:visible absolute bottom-20 left-12",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-4",
    className: "invisible dark:visible absolute bottom-20 right-12",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-5",
    className:
      "invisible dark:visible absolute top-[178px] 2xl:top-[182px] left-[35%] 2xl:left-[31%]",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-6",
    className: "invisible dark:visible absolute bottom-1 left-[37%]",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
  {
    id: "point-7",
    className: "invisible dark:visible absolute bottom-1 right-[37%]",
    position: { x: -1000, y: -1000 },
    fire: false,
  },
];

interface Props {
  setSpecifiedPositions: React.Dispatch<
    React.SetStateAction<Array<{ x: number; y: number; fire: boolean }>>
  >;
}

export const FirePoints: React.FC<Props> = ({ setSpecifiedPositions }) => {
  const [firePoints, setFirePoints] = useState<FirePoint[]>(firePointsData);

  useEffect(() => {
    const updatePositions = () => {
      const updatedFirePoints = firePoints.map(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            ...firePoints.find((fp) => fp.id === id)!,
            position: {
              x: rect.left + rect.width / 2,
              y: rect.top + rect.height / 2,
            },
          };
        } else {
          return {
            ...firePoints.find((fp) => fp.id === id)!,
            position: { x: 0, y: 0 },
          };
        }
      });

      const updatedSpecifiedPositions = updatedFirePoints.map(
        ({ position, fire }) => ({
          x: position.x,
          y: position.y,
          fire: fire,
        })
      );

      setSpecifiedPositions(updatedSpecifiedPositions);
    };

    updatePositions();

    const handleResize = () => {
      updatePositions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [firePoints, setSpecifiedPositions]);

  const handleFire = (id: string) => {
    setFirePoints((prevFirePoints) =>
      prevFirePoints.map((fp) => (fp.id === id ? { ...fp, fire: true } : fp))
    );
  };

  return (
    <>
      {firePoints.map(({ id, className, fire }) => (
        <div
          key={id}
          id={id}
          className={className}
          onMouseEnter={() => handleFire(id)}
        >
          <div className="flex items-center justify-center">
            {fire ? (
              <img src="/torch-burning.gif" />
            ) : (
              <>
                <img src="/torch.png" className="mt-7" />
              </>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
