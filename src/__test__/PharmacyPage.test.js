import React from "react";
import PharmacyPage from '../pages/pharmacy-page/PharmacyPage';
import { BrowserRouter as Router } from "react-router-dom";

import { render, fireEvent, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

test("Is submit button disabled", () => {
    const component = render(<Router><PharmacyPage /></Router>);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    expect(submitButton).toHaveAttribute("disabled");
});

test("Is submit button enabled after all input", () => {
    const component = render(<Router><PharmacyPage /></Router>);
    const submitButton = screen.getByRole("button", { name: "Submit" });



    fireEvent.change(screen.getByLabelText('Pharmacy Name'), {
        target: { value: "Yash medicos" },
    });
    fireEvent.change(screen.getByLabelText('Pharmacist Name'), {
        target: { value: "Yash" },
    });
    fireEvent.change(screen.getByLabelText('Designation'), {
        target: { value: "ceo" },
    });
    fireEvent.change(screen.getByLabelText('Gender'), {
        target: { value: "male" },
    });
    fireEvent.change(screen.getByLabelText('Address'), {
        target: { value: "123" },
    });
    fireEvent.change(screen.getByLabelText('City/Town'), {
        target: { value: "city" },
    });
    fireEvent.change(screen.getByLabelText('District'), {
        target: { value: "agra" },
    });
    fireEvent.change(screen.getByLabelText('State'), {
        target: { value: "Uttar Pradesh" },
    });
    fireEvent.change(screen.getByLabelText('Name of the owner'), {
        target: { value: "owner" },
    });
    fireEvent.change(screen.getByLabelText('Date of birth'), {
        target: { value: '2020-05-12' },
    });
    fireEvent.change(screen.getByLabelText('Pincode'), {
        target: { value: "243122" },
    });
    fireEvent.change(screen.getByLabelText('Email Id'), {
        target: { value: "hello@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText('Mobile number'), {
        target: { value: "9876543210" },
    });
    fireEvent.change(screen.getByLabelText('Alternate Mobile'), {
        target: { value: "0987654321" },
    });
    fireEvent.change(screen.getByLabelText('Established Year'), {
        target: { value: "1997" },
    });
    fireEvent.change(screen.getByLabelText('Licence Number'), {
        target: { value: "12345" },
    });

    const dropdownContainer = screen.getByTestId('dropdown-wrapper');
    fireEvent.click(dropdownContainer);

    const dropdown = screen.getByTestId('Radiology');
    fireEvent.click(dropdown);


    expect(submitButton).not.toBeDisabled();
});
