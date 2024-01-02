import { BrowserRouter, Routes, Route } from "react-router-dom";

import TablesPage from './TablesPage'
import IngestPage from './IngestPage'
import Header from './_components/Header'

/*
PAGES

Universal modal - job queue

1. Ingest
  - yt-dlp
  - upload
  - specify path (file browser)

2. Model processing

3. Databse viewer

4. Streaming (file browser)


*/

export default function App() {
  return (
    <BrowserRouter basename="/">

      <Header />

      <Routes>

        <Route
          path="/"
          element={<TablesPage />}
        />

        <Route
          // path="/ingest"
          path="/ingest"
          element={<IngestPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}
