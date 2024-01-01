import { BrowserRouter, Routes, Route } from "react-router-dom";

import FilePlayerPage from './FilePlayerPage'
import QueryPlayerPage from '@/_components/QueryPlayer'

const DEFAULT_VIDEO_PATH = import.meta.env.VITE_DEFAULT_VIDEO_PATH;
const DEFAULT_DIR_PATH = import.meta.env.VITE_DEFAULT_DIR_PATH;

export default function App() {
  return (
    <BrowserRouter basename="/">

      <Routes>

        <Route path="/" element={
          <FilePlayerPage 
            // todo: REPLACE these props with a in-route call to react-query
            defaultDirPath={DEFAULT_DIR_PATH}
            defaultVideoPath={DEFAULT_VIDEO_PATH}
          />
        } />
        
        <Route path="query-player" element={<QueryPlayerPage videoPath={DEFAULT_VIDEO_PATH} />} />

      </Routes>

    </BrowserRouter>
  );
}
