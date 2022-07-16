import Stories from "./stories/Stories";
import Posts from "./posts/Posts";
import Sidebar from "./sidebar/Sidebar";

export default function Feed() {
  return (
    <div className="feed">
      <main>
        <Stories />
        <Posts />
      </main>

      <Sidebar />
    </div>
  );
}
