import React from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";

function Team({team}) {
 
  return (
    <section className="our-team">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-heading">
              <h2>Our Amazing Team</h2>
              <span>
                Details to details is what makes Hexashop different from the
                other themes.
              </span>
            </div>
          </div>

          {team?.map((item, index) => (
            <div key={index} className="col-lg-4">
              <div className="team-item">
                <div className="thumb">
                  <div className="hover-effect">
                    <div className="inner-content">
                      <ul>
                        <li>
                          <Link href={item.fb} target="_blank">
                            <Icon
                              icon="ri:facebook-fill"
                              className="hover_icon"
                              width="20"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={item.twitter} target="_blank">
                            <Icon
                              icon="mdi:twitter"
                              className="hover_icon"
                              width="20"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={item.insta} target="_blank">
                            <Icon
                              icon="ph:instagram-logo-fill"
                              className="hover_icon"
                              width="20"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link href={item.linkdin} target="_blank">
                            <Icon
                              icon="ph:linkedin-logo-fill"
                              className="hover_icon"
                              width="20"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <img src={item.image} />
                </div>
                <div className="down-content">
                  <h4>{item.name}</h4>
                  <span>{item.desgination}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
