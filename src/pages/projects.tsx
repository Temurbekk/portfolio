import React from "react";
import { Tabs, TabPanel } from "react-tabs";
import "../styles/tabs.css";
import Projects from "../data/Projects";
import ProjectBox from "../components/ProjectsBox/";
import { ProjectsWrapper, ProjectsSection } from "../styles/ProjectsStyles";
import Layout from "../components/layout";

const ProjectsPage = () => {
  return (
    <Layout pageTitle="About Me">
      <ProjectsWrapper>
        <Tabs>
          <TabPanel>
            <ProjectsSection>
              {Projects.map((item) => (
                <ProjectBox key={item.id} info={item} />
              ))}
            </ProjectsSection>
          </TabPanel>
        </Tabs>
      </ProjectsWrapper>
    </Layout>
  );
};

export default ProjectsPage;
