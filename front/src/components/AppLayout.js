import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Layout, Breadcrumb, Col } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import GraduateForm from "./GraduateForm";
import GraduateInfo from "./GraduateInfo";
import Navigator from "./Navigator";
import InfoTabsContainer from "../container/InfoTabsContainer";
import FAQ from "./FAQ";
const { Content, Footer } = Layout;

const infoList = {
  1: "컴퓨터공학과 공지",
  2: "코로나 공지",
  3: "학생 공지",
  4: "일반 공지",
  5: "인턴 및 대외활동 공지",
};
const CurPageList = {
  1: "공지사항",
  2: "졸업학점 계산기",
  3: "",
};
const AppLayout = ({ isLogined, history }) => {
  const [curPage, setCurPage] = useState(1);
  const [curInfo, setCurInfo] = useState(1);

  const onClickPage = useCallback((item) => {
    setCurPage(parseInt(item.key, 10));
  }, []);

  const setCurInfofn = useCallback(
    () => (id) => {
      setCurInfo(id);
    },
    []
  );

  useEffect(() => {
    setCurInfo(1);
  }, [curPage]);

  const InfoPage = () => {
    switch (curPage) {
      case 1:
        return (
          <InfoTabsContainer
            className="site-layout-content"
            setCurInfofn={setCurInfofn}
          ></InfoTabsContainer>
        );
      case 2:
        return isLogined ? (
          <GraduateInfo
            className="site-layout-content"
            history={history}
          ></GraduateInfo>
        ) : (
          <>
            <Col lg={14} xs={24}>
              <div>
                <p>
                  ※클래스넷 로그인정보를 입력하시면 졸업요건을 충족하는지
                  확인하실 수 있습니다
                </p>

                <p>
                  ※해당 졸업학점계산기는 교육과정 비인증대상
                  (컴퓨터공학과),(컴퓨터공학과 예정 정보컴퓨터공학부) 학생만
                  해당이됩니다 (복수전공,융합전공은 해당되지 않습니다)
                </p>
                <p>
                  ※졸업요건이 교육인증대상에 해당하신분들은{" "}
                  <a
                    href="http://www.ce.hongik.ac.kr/dept/cs/0302.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                  >
                    추가적인 졸업요건
                  </a>
                  을 조회하시기 바랍니다
                </p>
                <b>이 사이트는 절대 개인의 데이터를 저장하지 않습니다</b>
              </div>
            </Col>
            <Col lg={12} xs={24} md={12} sm={16}>
              <GraduateForm className="site-layout-content"></GraduateForm>
            </Col>
          </>
        );
      case 3:
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <FAQ />
          </div>
        );
      default:
        return <div>에러 입니다 ㅜㅜ 죄송합니다 ㅜㅜ</div>;
    }
  };

  return (
    <>
      <Layout className="layout" style={{ minHeight: "100vh" }}>
        <Navigator onClick={onClickPage}></Navigator>
        <Content
          style={{
            paddingLeft: 24,
            paddingRight: 24,
            paddingBottom: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Breadcrumb style={{ margin: "24px 24px 24px 24px" }}>
            <Breadcrumb.Item>{CurPageList[curPage]}</Breadcrumb.Item>

            {curPage === 1 && (
              <Breadcrumb.Item>{infoList[curInfo]}</Breadcrumb.Item>
            )}
            {curPage === 2 && <Breadcrumb.Item>{"졸업학점"}</Breadcrumb.Item>}
          </Breadcrumb>
          {InfoPage()}
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a href="https://github.com/WHO-A-U">
            <GithubOutlined style={{ fontSize: 30, margin: 10 }} />
          </a>
          <a href="https://github.com/zmrdltl">
            <GithubOutlined
              style={{ fontSize: 30, margin: 10, color: "black" }}
            />
          </a>
        </Footer>
      </Layout>
    </>
  );
};
AppLayout.propTypes = {
  isLogined: PropTypes.bool,
  history: PropTypes.object,
};
export default connect(({ myHistory }) => ({
  isLogined: myHistory.isLogined,
  history: myHistory.history,
}))(AppLayout);
