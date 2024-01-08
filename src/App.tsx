import { BrowserRouter, Routes, Route } from "react-router-dom";

import TablesPage from './TablesPage'
import IngestPage from './IngestPage'
import ProcessPage from './ProcessPage'
import QueuePage from './QueuePage'
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
          path="/ingest"
          element={<IngestPage />}
        />
        <Route
          path="/process"
          element={<ProcessPage />}
        />
        <Route
          path="/queue"
          element={<QueuePage />}
        />


      </Routes>

    </BrowserRouter>
  );
}
