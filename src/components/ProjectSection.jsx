import React from 'react'
import './ProjectSection.css'
import { Link } from 'react-router-dom'
import commerce from '../assets/commerce.svg'
import note from '../assets/note.svg'
import playCompass from '../assets/playCompass.svg'
import quotes from '../assets/quotes.svg'
import raily from '../assets/raily.svg'
import unsplash from '../assets/unsplash.svg'


const ProjectSection = () => {
  return (
    <div className="projectSection" id="projectSection">
      <div className="projectTextAndDescriptionContainer">
        <div className="projectTextContainer">
          <h2>Projects</h2>
        </div>

        <div className="projectdescriptionContainer">
          <p>My Curated Architectures</p>
        </div>
      </div>

      <div className="projectsContainer">
        <div className="firstRowOfProjects">
          <div className="projectContainer">
            <div className="imageContainerPrecious"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>Video Messaging App</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    From Figma to React. Explore Hive a video messaging app that
                    seamlessly connects users in real time.{" "}
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://hive-seven-sigma.vercel.app"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="./index.html" className="viewProject">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>
          <div className="projectContainer">
            <div className="imageContainerRandomQuotes"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>Random Quotes Generator</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    Fetching random quotes from an API. Click the button, get a
                    quote! it's that easy! Discover random quotes with just one
                    click.{" "}
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://bit.ly/randomquotegenerator"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="https://bit.ly/randomquotegenerator" className="viewProject" target="_blank">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>

          <div className="projectContainer">
            <div className="imageContainerUnsplash"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>Unsplash Website</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    A polished and professional landing page mirroring the
                    design of the Unsplash website with precision and accuracy.
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://preshchukwu.github.io/Unsplash-clone"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="https://preshchukwu.github.io/Unsplash-clone/" className="viewProject" target="_blank">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>
        </div>

        <div className="firstRowOfProjects">
          <div className="projectContainer">
            <div className="imageContainerNote"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>Note App</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    Effortlessly capture your thoughts, ideas, and more in a
                    user-friendly note-taking interface designed for ease of
                    use.{" "}
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://preshchukwu.github.io/Note-App/"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="https://preshchukwu.github.io/Note-App/" className="viewProject" target="_blank">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>

          <div className="projectContainer">
            <div className="imageContainerColorGenerator"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>Random Color Generator</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    Effortlessly generate diverse color palettes with a single
                    click. Explore various shades to discover the perfect
                    combination.
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://preshchukwu.github.io/Color-Generator/"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="https://preshchukwu.github.io/Color-Generator/" className="viewProject" target="_blank">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>

          <div className="projectContainer">
            <div className="imageContainerRayn"></div>

            <div className="titleDescriptionAndLinkContainer">
              <div className="titleAndDescriptionContainer">
                <div className="titleContainer">
                  <h3>E-commerce KPI tracking</h3>
                </div>

                <div className="descriptionContainer">
                  <p>
                    Empowers sales managers, and marketing executives to excel
                    in their respective roles within the "Shop" e-commerce
                    platform.
                  </p>
                </div>
              </div>

              <Link
                className="viewProject"
                target="_blank"
                to={"https://rayn-interiors1.vercel.app/"}
              >
                <p>View Project</p>
              </Link>

              {/* <a href="https://rayn-interiors1.vercel.app/" className="viewProject" target="_blank">
                            <p>View Project</p>
                        </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection
