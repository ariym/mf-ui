import { BrowserRouter, Routes, Route } from "react-router-dom";

import TablesPage from './TablesPage'
import IngestPage from './FilesPage'
import ProcessPage from './TagsPage'
import QueuePage from './JobsPage'
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
          path="/files"
          element={<IngestPage />}
        />
        <Route
          path="/tags"
          element={<ProcessPage />}
        />
        <Route
          path="/jobs"
          element={<QueuePage />}
        />


      </Routes>

    </BrowserRouter>
  );
}
