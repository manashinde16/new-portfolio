export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <span>© {new Date().getFullYear()} Manas Shinde — designed &amp; built by me.</span>
        <span><a data-target="top" role="link" tabIndex={0}>back_to_top( ) ↑</a></span>
      </div>
    </footer>
  );
}
