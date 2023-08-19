import React from 'react'
import "./Sidebar.css";
import SidebarOption from './SidebarOption';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
  const [{ playlists }, dispatch] = useDataLayerValue()

  return (
    <div className="sidebar">
      <img 
      className="sidebar__logo"
      src="https://logos-world.net/wp-content/uploads/2020/09/Spotify-Logo.png" 
      alt="spotify" 
      />
      <SidebarOption Icon={HomeIcon} title = "Home" />
      <SidebarOption Icon={SearchIcon} title = "Search" />
      <SidebarOption Icon={LibraryMusicIcon} title = "Your Library" />

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

     {playlists?.items?.map(playlist => (
      <SidebarOption title={playlist.name} />
     ))}
    </div>
  )
}

export default Sidebar;