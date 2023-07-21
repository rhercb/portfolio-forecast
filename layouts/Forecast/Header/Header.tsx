import React from "react";

import ForecastPlaceSelector from "@components/Forecast/ForecastPlaceSelector";
import ProjectsHeader from "@components/ProjectsHeader";

const ForecastHeader: React.FC = () => {
    return (
        <ProjectsHeader githubLink="/s">
            <ForecastPlaceSelector />
        </ProjectsHeader>
    );
};

export default ForecastHeader;
