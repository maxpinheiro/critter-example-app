import React, { createContext, useState } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import PostFeed from "./components/PostFeed";
import Home from "./Home";
import { store } from "./store/app.store";

export const ThemeContext = createContext({
    theme: "light",
    setTheme: (theme: string) => {},
});

const App: React.FC = () => {
    const [ theme, setTheme ] = useState("light");

    return (
        <div>
            <ThemeContext.Provider value={{ theme, setTheme }}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/posts">
                                <Route path="" element={<PostFeed />} />
                                <Route path=":postId" element={<PostDetails />} />x
                            </Route>
                            <Route path="/" element={<Home />} />
                            <Route path="*" element={<p>Fallback</p>} />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </ThemeContext.Provider>
        </div>
    );
}

export default App;
