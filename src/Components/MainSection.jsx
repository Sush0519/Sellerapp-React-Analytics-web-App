export default function MainSection({ children, isCollapsed }) {
  return (
    <div className={`main-section ${isCollapsed ? "collapsed" : ""}`}>
      {" "}
      {children}
    </div>
  );
}
