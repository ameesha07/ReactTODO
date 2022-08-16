import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateTask from "./CreateTask";
import Main from "./Main";

describe('To add an item and submit using Add button', () => {
    it('Adding item to the form', () => {
        render(<Main />)
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "To eat");
        expect(inputField).toHaveValue("To eat");
    })
    it('clicking Add  button to add item below', () => {
        render(<Main />)
        const addTask = screen.getByTestId('add-task-button');
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "To sleep");
        userEvent.click(addTask);
        expect(addTask).toBeInTheDocument();
    })
    it('To check whether added item is present', () => {
        render(<Main />)
        const addTask = screen.getByTestId('add-task-button');
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "To eat");
        userEvent.click(addTask);
        const Item = screen.getByTestId(1);
        expect(Item).toHaveTextContent("To eat");
    })
})