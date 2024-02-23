import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ListItem, ListItemAvatar, Avatar, ListItemText } from "@mui/material";

interface SideBarListItemProps {
  icon: React.FC;
  title: string;
  path: string;
  onClick?: () => void;
}

const SideBarListItem: React.FC<SideBarListItemProps> = (props) => {
  const { icon: Icon, title, path, onClick } = props;

  const router = useRouter();
  const pathName = usePathname();

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(pathName === path);
  }, [pathName, path]);

  const onClickHandler = () => {
    if (onClick != null) {
      onClick();
    } else if (pathName != path) {
      router.push(path);
    }
  };

  return (
    <ListItem
      sx={{
        padding: "0.75rem",
        cursor: "pointer",
        borderRadius: "1rem",
        ":hover": {
          backgroundColor: "#191919",
        },
      }}
      onClick={onClickHandler}
    >
      <ListItemAvatar>
        <Avatar
          sx={{
            backgroundColor: active ? "primary.main" : "#373739",
            borderRadius: "1rem",
          }}
        >
          <Icon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          sx: active
            ? { fontWeight: "bolder", color: "primary.main" }
            : { fontWeight: "normal" },
        }}
      />
    </ListItem>
  );
};

export { SideBarListItem };
