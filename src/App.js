import { Fragment, useEffect, useState } from "react";
import WebFont from "webfontloader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";

function App() {
    useEffect(() => {
        WebFont.load({
            google: {
                families: ["Manrope"],
            },
        });
    });
    const [loading, setLoading] = useState(false);

    // const params = useParams();

    useEffect(() => {
        setTimeout(() => setLoading(true), 1500);
    }, []);
    return (
        <>
            {loading ? (
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            ) : (
                <LoadingScreen />
            )}
        </>
    );
}

export default App;

