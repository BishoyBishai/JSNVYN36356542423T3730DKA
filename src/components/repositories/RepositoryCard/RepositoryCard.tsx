import { FC } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";

import {
  CalendarFold,
  CalendarPlus,
  GithubIcon,
  LockKeyhole,
  Star,
} from "lucide-react";
import { IRepository } from "@/interfaces/repositories";
import { formatDate } from "@/utils/formatDate";
import { Button } from "@/components/ui/Button";

interface RepositoryCardProps {
  repository: IRepository;
}

// Component for rendering the repository title with menu actions
const RepositoryTitle: FC<{ repository: IRepository }> = ({ repository }) => (
  <div className="flex gap-2 items-center py-2">
    <img src={repository.owner.avatar_url} className="w-10 h-10 rounded-full" />
    <div className="grow flex flex-col overflow-hidden">
      <div className="grow h-8 text-lg overflow-hidden text-ellipsis">
        {repository.name}
      </div>
      <Button variant="link" className="h-auto p-0 block" asChild>
        <a
          href={repository.html_url}
          className=" overflow-hidden text-ellipsis"
          target="blank"
        >
          {repository.full_name}
        </a>
      </Button>
    </div>
  </div>
);

// Component for rendering the repository description
const RepositoryDescription: FC<{ repository: IRepository }> = ({
  repository,
}) => (
  <div className="text-sm text-muted-foreground">
    <div className="flex flex-col gap-2 pb-2">
      <div className="flex items-center grow gap-2">
        <LockKeyhole />
        {repository.private ? "Private" : "public"}
      </div>
      <div className="flex items-center grow gap-2">
        <GithubIcon /> open issues {repository.open_issues_count}
      </div>
      <div className="flex items-center grow gap-2">
        <Star /> {repository.stargazers_count}
      </div>

      <div className="xl:flex">
        <div className="flex items-center grow gap-2 mb-2">
          <CalendarPlus />
          {formatDate(repository.created_at)}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <CalendarFold />
          {formatDate(repository.created_at)}
        </div>
      </div>
    </div>
  </div>
);

// Component for rendering the repository card
export const RepositoryCard: FC<RepositoryCardProps> = ({ repository }) => (
  <Card>
    <CardHeader>
      <CardTitle>
        <RepositoryTitle repository={repository} />
      </CardTitle>
      <RepositoryDescription repository={repository} />
    </CardHeader>
  </Card>
);
