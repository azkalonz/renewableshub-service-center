import { Link } from "react-router-dom";

export default function App() {
  const widgets = ['widget-name'];
  return (
    <>
      <ul>
        {widgets.map((widget) => (
          <li key={widget}>
            <Link
              to={widget}
              style={{
                textTransform: 'capitalize',
              }}
            >
              {widget.replace('-', ' ')} Widget
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
