import { Alert } from "react-bootstrap";

function Message({ variant = "info", children }) {
  return <Alert variant={variant}>{children}</Alert>;
}

// Support for defaultProps will be removed from function components in a future major release.
// Use JavaScript default parameters instead

// Message.defaultProps = {
//   variant: "info",
// };

export default Message;
