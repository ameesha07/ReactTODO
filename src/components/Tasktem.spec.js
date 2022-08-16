import { render, screen, fireEvent } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import Main from "./Main";
describe("delete operation", () => {
    it("delete particular task", () => {
        render(<Main />)
        const addTask = screen.getByTestId('add-task-button');
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "do exercise");
        userEvent.click(addTask);
        const deleteButton = screen.getByTestId('delete-button');
        const Item = screen.getByText("do exercise");
        userEvent.click(deleteButton);
        expect(Item).not.toBeInTheDocument();
    })
})
describe("edit operation", () => {
    it("Edit task name", () => {
        render(<Main />)
        const addTask = screen.getByTestId('add-task-button');
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "play football");
        userEvent.click(addTask);
        const editButton = screen.getByTestId("edit-button");
        userEvent.click(editButton);
        const editableValue = screen.getByTestId('edit-task');
        expect(editableValue.value).toEqual("play football");
    })
})
describe("save new value", () => {
    it("saving new value", () => {
        render(<Main />)
        const editButton = screen.getByTestId("edit-button");
        userEvent.click(editButton);
        const editableValue = screen.getByTestId('edit-task');
        editableValue.textContent = "play cricket";
        const saveButton = screen.getByTestId("save-button");
        userEvent.click(saveButton);
        expect(editableValue.textContent).toEqual("play cricket");
    })
})
describe("toggeling of task", () => {
    it("set task as completed", () => {
        render(<Main />)
        const addTask = screen.getByTestId('add-task-button');
        const inputField = screen.getByTestId('input-field-id');
        userEvent.type(inputField, "yoga time");
        userEvent.click(addTask);
        const toggleTask = screen.getByText("yoga time");
        const toggleButton = screen.getByTestId(1);
        userEvent.click(toggleButton);
        expect(toggleTask).isChecked;
    })
    it("set task as not completed", () => {
        render(<Main />);
        const toggleTask = screen.getByText("yoga time");
        const toggleButton = screen.getByTestId(1);
        userEvent.click(toggleButton);
        expect(toggleTask).isUnChecked;
    })
})