import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { useSearchContext } from "../../context/AuthContext";
import { useState } from "react";
import { global } from "../../styles/Global.styles";
import { useThemeContext } from "../../context/ThemeContext";
function Header() {
  const [form, setForm] = useState({ query: "", printType: "all" });
  const { setSearch } = useSearchContext();
  const { theme } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(form);
    setForm({ query: "", printType: "all" });
  };

  return (
    <Form
      style={theme ? global.lHeaderbg : global.dHeaderbg}
      className="mx-auto text-center"
      onSubmit={handleSubmit}
    >
      <h2>BOOKS OR MAGAZINES</h2>
      <InputGroup className="mb-3">
        <Form.Control
          type="search"
          placeholder="Search..."
          value={form.query}
          onChange={(e) =>
            setForm({ ...form, query: e.target.value.toLowerCase().trim() })
          }
        />
        <DropdownButton
          variant="outline-danger text-white bg-danger"
          title={form.printType.toUpperCase()}
          id="dropdown"
          align="end"
          value={form.printType}
          onSelect={(e) =>
            setForm({ ...form, printType: e.toLowerCase().trim() })
          }
        >
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
          <Dropdown.Item eventKey="Books">Books</Dropdown.Item>
          <Dropdown.Item eventKey="Magazines">Magazines</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
      <Button type="submit" variant="danger px-5">
        SEARCH
      </Button>
    </Form>
  );
}

export default Header;
