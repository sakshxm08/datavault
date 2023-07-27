import { RecentFileSmall } from "./RecentFIleSmall";
import { RecentFile } from "./RecentFile";

export const Recent = ({ heading, recent }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bodyFont text-2xl font-extrabold text-sky-950 dark:text-sky-100">
        {heading}
      </h1>
      <div className="flex gap-4 flex-col">
        {recent.map((type) => {
          return (
            <>
              <RecentFile type={type} icon={type.icon} />
              <RecentFileSmall type={type} icon={type.icon} />
            </>
          );
        })}
      </div>
    </div>
  );
};
