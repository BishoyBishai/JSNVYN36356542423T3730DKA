import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface IPageTitleProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  subTitle?: ReactNode;
  withAction?: ReactNode;
}

export const PageTitle: FC<IPageTitleProps> = ({
  title,
  subTitle,
  withAction,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-y-2 justify-between md:flex-row ",
        className
      )}
    >
      <div
        className="flex flex-col justify-between space-y-2 items-center md:items-start"
        {...props}
      >
        <h2 className="text-2xl font-bold tracking-tight">{title}</h2>
        {subTitle && (
          <h3 className="max-w-[750px] text-lg text-muted-foreground sm:text-xl max-md:text-center">
            {subTitle}
          </h3>
        )}
      </div>
      {withAction && <>{withAction}</>}
    </div>
  );
};
