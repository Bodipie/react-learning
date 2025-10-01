import "./TheFooter.css";

function TheFooter() {
  return (
    <footer>
      <div>
        <p>&copy; {new Date().getFullYear()} My React App. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default TheFooter;