jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Link: ({ children }) => <>{children}</>,
    useNavigate: jest.fn(),
    useLocation: jest.fn(),
  }));


