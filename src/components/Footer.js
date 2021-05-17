
import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-timezone";
import { Row, Col, Card } from '@themesberg/react-bootstrap';

export default function Footer(props) {
  const currentYear = moment().get("year");
  const { t } = useTranslation();

  return (
    <div>
      <footer className="footer section py-5">
        <Row>
          <Col xs={12} lg={6} className="mb-4 mb-lg-0">
            <p className="mb-0 text-center text-xl-left">
            {t("copyright")} © {`${currentYear} `}
              <Card.Link href="https://quizzy.com" target="_blank" className="text-blue text-decoration-none fw-normal">
                {t("quizzy")}
            </Card.Link>
            </p>
          </Col>
          {/* <Col xs={12} lg={6}>
            <ul className="list-inline list-group-flush list-group-borderless text-center text-xl-right mb-0">
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/about" target="_blank">
                  About
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/themes" target="_blank">
                  Themes
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/blog" target="_blank">
                  Blog
              </Card.Link>
              </li>
              <li className="list-inline-item px-0 px-sm-2">
                <Card.Link href="https://themesberg.com/contact" target="_blank">
                  Contact
              </Card.Link>
              </li>
            </ul>
          </Col> */}
        </Row>
      </footer>
    </div>
  );
};
