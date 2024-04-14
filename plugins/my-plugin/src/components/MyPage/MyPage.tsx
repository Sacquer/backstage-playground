import React from "react";
import { Routes, Route } from 'react-router-dom';

import { ExampleComponent } from "../ExampleComponent";
import { DetailsPage } from "../DetailsPage";

export const MyPage = () => (
  <Routes>
    {/* myPlugin.routes.root will take the user to this page */}
    <Route path="/" element={<ExampleComponent />} />

    {/* myPlugin.routes.details will take the user to this page */}
    <Route path="/details" element={<DetailsPage />} />
  </Routes>
);
