import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { publicRoute } from './routes';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoute.map((item, index) => {
            const Page = item.component;
            const Layout = DefaultLayout;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page></Page>
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
