import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { CurrentUserProvider } from "../../contexts/CurrentUserContext";
import NavBar from "../NavBar";
import { act } from 'react';

test("renders NavBar", () => {
  render(
    <Router>
      <NavBar />
    </Router>
  );

  // screen.debug();
  const signInLink = screen.getByRole("link", { name: "Sign in" });
  expect(signInLink).toBeInTheDocument();
});

test("renders link to the user profile for a logged in user", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const profileAvatar = await screen.findByText("Shree");
  expect(profileAvatar).toBeInTheDocument();
});

test("renders Sign in and Sign up buttons again on log out", async () => {
  render(
    <Router>
      <CurrentUserProvider>
        <NavBar />
      </CurrentUserProvider>
    </Router>
  );

  const signOutLink = await screen.findByRole("link", { name: "Sign out" });
  act(() => {
    fireEvent.click(signOutLink); // Wrap fireEvent in act to avoid warnings
  });


  await waitFor(() => {   
    const signInLink = screen.getByRole("link", { name: "Sign in" });
    const signUpLink = screen.getByRole("link", { name: "Sign up" });
  
    expect(signInLink).toBeInTheDocument();
    expect(signUpLink).toBeInTheDocument();
  })
});