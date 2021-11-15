import HospitalRow from '../components/HospitalRow';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
test('comment box is opened when open button is clicked', () => {
    const hospitalData = {
        date: "1/12/2021",
        pharmacy: "Guyon",
        name: "Rowland",
        phone: "481-638-2241",
        address: "70182 Rutledge Junction",
        status: "pending"
    }
    render(<Router><HospitalRow hospital={hospitalData} /></Router>);

    //initially tooltip is not visible

    const initialCommentTooltip = screen.queryByTestId('comment-tooltip');
    expect(initialCommentTooltip).not.toBeInTheDocument();

    const openButton = screen.getByRole('button', { name: /open/i });
    fireEvent.click(openButton);
    const commentTooltip = screen.getByTestId('comment-tooltip');
    expect(commentTooltip).toBeInTheDocument();

})