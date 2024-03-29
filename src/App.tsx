import { BrowserRouter, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import Header from './_components/Header'
import TablesPage from './TablesPage'
import IngestPage from './FilesPage'
import ProcessPage from './TagsPage'
import JobsPage from './JobsPage'
import Error404Page from './Error404Page'

const queryClient = new QueryClient()

/*

App.tsx is a wrapper for react-router and tanstack/react-query

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

      <QueryClientProvider client={queryClient}>

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
          element={<JobsPage />}
        />

        <Route path="*" element={<Error404Page />} />

      </Routes>

      </QueryClientProvider>

    </BrowserRouter>
  );
}
