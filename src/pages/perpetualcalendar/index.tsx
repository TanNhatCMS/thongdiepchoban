import React from 'react';

import './perpetualcalendar.css';

const PerpetualCalendar: React.FC = () => {

  return (
    <>
      <>
        <div className="container row pt pb bg-body">
          <div className="col col6" id="box1">
            <div className="calendarblock boxpdl">
              <div className="d-flex w-100">
                <div className="head-box">
                  Dương Lịch&nbsp;<span>29-12-2024</span>
                </div>
                <div className="head-box head-box-al">
                  Âm Lịch&nbsp;<span>29-11-2024</span>
                </div>
              </div>
              <div className="headmonth">Tháng 12 năm 2024</div>
              <div className="headmonth borderleft">Tháng 11(Đ) năm Giáp Thìn</div>
              <div className="big-calendar">
                <div className="day-solar">29</div>
                <div className="thu">Chủ Nhật</div>
              </div>
              <div className="big-calendar borderleft">
                <div className="day-solar lular-day">29</div>
                <div className="chitietam">
                  <div>
                    <span>Tháng :</span> <i>Bính Tý</i>
                  </div>
                  <div>
                    <span>Ngày :</span> <i>Đinh Mão</i>
                  </div>
                  <div>
                    <span>Giờ :</span> <i>Canh Tí</i>
                  </div>
                </div>
              </div>
              <div className="footf">
                <strong className="text-danger">NGÀY HOÀNG ĐẠO</strong>
                <span>
            Giờ tốt: Dần(3 - 5),Mão(5 - 7),Ngọ(11 - 13),Mùi(13 - 15),Dậu(17 -
            19),Tý (23 - 1)
          </span>
              </div>
              <hr />
              <a
                href="/pages/lich-van-nien-lich-van-su/?date=30-12-2024"
                className="btn btn-outline-dark btn-sm mr-1 pull-right"
              >
                Ngày tiếp theo
                <div className="iconsvg iconsvg-right"></div>
              </a>
              <a
                href="/pages/lich-van-nien-lich-van-su/?date=28-12-2024"
                className="btn btn-outline-dark btn-sm mr-1 pull-right"
              >
                <div className="iconsvg iconsvg-left"> </div>
                Trước
              </a>
            </div>{" "}
          </div>
          <div className="col col6">
            <div className="calendarblock boxpdl" id="box2">
              <nav className="pagination justify-content-center">
                <a className="page-item page-link " href="?date=1-11-2024">
                  <span className="iconsvg iconsvg-left"> </span> Tháng trước
                </a>
                <span className="page-item page-link  font-weight-bold">
            Tháng 12 (2024)
          </span>
                <a className="page-item page-link" href="?date=1-1-2025">
                  Tháng tiếp
                  <span className="iconsvg iconsvg-right"> </span>
                </a>
              </nav>
              <div className="lichthangli">
                <div>Thứ 2</div> <div>Thứ 3</div> <div>Thứ 4</div> <div>Thứ 5</div>{" "}
                <div>Thứ 6</div> <div>Thứ bảy</div> <div>Chủ nhật</div>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <a href="?date=1-12-2024" className="sunday">
                  <span>1</span>
                  <span>1/11</span>
                  <span>Mùng 1</span>
                </a>
                <a href="?date=2-12-2024" className="hd">
                  <span>2</span>
                  <span>2</span>
                </a>
                <a href="?date=3-12-2024" className="hd">
                  <span>3</span>
                  <span>3</span>
                </a>
                <a href="?date=4-12-2024">
                  <span>4</span>
                  <span>4</span>
                </a>
                <a href="?date=5-12-2024" className="hd">
                  <span>5</span>
                  <span>5</span>
                </a>
                <a href="?date=6-12-2024">
                  <span>6</span>
                  <span>6</span>
                </a>
                <a href="?date=7-12-2024">
                  <span>7</span>
                  <span>7</span>
                </a>
                <a href="?date=8-12-2024" className="hd sunday">
                  <span>8</span>
                  <span>8</span>
                </a>
                <a href="?date=9-12-2024">
                  <span>9</span>
                  <span>9</span>
                </a>
                <a href="?date=10-12-2024" className="hd">
                  <span>10</span>
                  <span>10</span>
                </a>
                <a href="?date=11-12-2024" className="hd">
                  <span>11</span>
                  <span>11</span>
                </a>
                <a href="?date=12-12-2024">
                  <span>12</span>
                  <span>12</span>
                </a>
                <a href="?date=13-12-2024">
                  <span>13</span>
                  <span>13</span>
                </a>
                <a href="?date=14-12-2024" className="hd">
                  <span>14</span>
                  <span>14</span>
                </a>
                <a href="?date=15-12-2024" className="hd sunday">
                  <span>15</span>
                  <span>15</span>
                  <span>Rằm tháng 11</span>
                </a>
                <a href="?date=16-12-2024">
                  <span>16</span>
                  <span>16</span>
                </a>
                <a href="?date=17-12-2024" className="hd">
                  <span>17</span>
                  <span>17</span>
                </a>
                <a href="?date=18-12-2024">
                  <span>18</span>
                  <span>18</span>
                </a>
                <a href="?date=19-12-2024">
                  <span>19</span>
                  <span>19</span>
                </a>
                <a href="?date=20-12-2024" className="hd">
                  <span>20</span>
                  <span>20</span>
                </a>
                <a href="?date=21-12-2024">
                  <span>21</span>
                  <span>21</span>
                </a>
                <a href="?date=22-12-2024" className="hd sunday">
                  <span>22</span>
                  <span>22</span>
                </a>
                <a href="?date=23-12-2024" className="hd">
                  <span>23</span>
                  <span>23</span>
                </a>
                <a href="?date=24-12-2024">
                  <span>24</span>
                  <span>24</span>
                </a>
                <a href="?date=25-12-2024">
                  <span>25</span>
                  <span>25</span>
                </a>
                <a href="?date=26-12-2024" className="hd">
                  <span>26</span>
                  <span>26</span>
                </a>
                <a href="?date=27-12-2024" className="hd">
                  <span>27</span>
                  <span>27</span>
                </a>
                <a href="?date=28-12-2024">
                  <span>28</span>
                  <span>28</span>
                </a>
                <a href="?date=29-12-2024" className="hd sunday today selected-day">
                  <span>29</span>
                  <span>29</span>
                  <span>Hôm nay</span>
                </a>
                <a href="?date=30-12-2024">
                  <span>30</span>
                  <span>30</span>
                </a>
                <a href="?date=31-12-2024" className="hd">
                  <span>31</span>
                  <span>1/12</span>
                  <span>Mùng 1</span>
                </a>
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="circle_hd circle_hd_hd"> Ngày hoàng đạo</span>
              <span className="circle_hd"> Ngày hắc đạo</span>{" "}
            </div>
          </div>
        </div>
        <div className="container row  pb bg-body">
          <div className="col" id="box3">
            <div id="vansu_back" className="boxpdl row h-auto">
              <div className="headdetail" id="tt_thongtincoban">
                {" "}
                Thông tin chi tiết ngày <span>29-12-2024</span>- Ngày âm lịch{" "}
                <span>29-11-2024</span>
              </div>
              <div className="col col6">
                <ul>
                  <li>
                    <strong>Can chi: </strong>Ngày Đinh Mão - Tháng Bính Tý - Năm Giáp
                    Thìn
                  </li>
                  <li>
                    <strong>
                <span className="hoangdaoinfo">
                  Ngày Hoàng Đạo: <span> Sao Ngọc Đường</span>
                </span>
                    </strong>
                  </li>
                  <li>
                    <span style={{ fontWeight: "bold" }}>Trực Bình</span> :Tốt với mọi
                    việc (?)
                  </li>
                  <li>
                    <strong>Nhị thập bát tú - Mão</strong>:
                    <small>(Hành: Thái Dương; Con vật: Gà)</small> Xấu mọi việc
                  </li>
                  <li>
                    <strong>Tiết khí: </strong> Giữa <span>Đông chí</span> -{" "}
                    <span>Tiểu hàn</span>
                  </li>
                </ul>
              </div>
              <div className="col col6">
                <div id="tt_giohangdao" className="tieudiengiai">
                  GIỜ TỐT TRONG NGÀY (Giờ Hoàng Đạo)
                </div>
                <div className="saotot">
                  <ul>
                    <li>
                      Dần(3 - 5),Mão(5 - 7),Ngọ(11 - 13),Mùi(13 - 15),Dậu(17 - 19),Tý
                      (23 - 1)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col6">
                <div id="tt_huongxuathanh" className="tieudiengiai">
                  HƯỚNG XUẤT HÀNH
                </div>
                <div className="saotot">
                  <ol>
                    <li>
                      Hướng gặp Tài Thần (TỐT):
                      <span style={{ color: "red", fontWeight: "bold" }}>Đông</span>
                    </li>
                    <li>
                      Hướng gặp Hỉ Thần (TỐT):
                      <span style={{ color: "red", fontWeight: "bold" }}>
                  Tây Bắc
                </span>
                    </li>
                    <li>
                      Hướng gặp Hạc Thần (Xấu):
                      <span style={{ fontWeight: "bold" }}>Nam</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col col6">
                <div id="tt_tuoiky" className="tieudiengiai">
                  CÁC TUỔI XUNG KHẮC VỚI NGÀY 29-12-2024, ÂM LỊCH 29-11-2024
                </div>
                <div className="saoxau">
                  <ul>
                    <li>Ất Dậu, Quý Dậu, Quý Tỵ, Quý Hợi</li>
                  </ul>
                </div>
              </div>
              <div className="col col6">
                <div className="tieudiengiai">CÁC SAO TỐT</div>
                <div className="saotot">
                  <ol>
                    <li>
                      <strong>Thiên Ân</strong> Tốt mọi việc
                    </li>
                    <li>
                      <strong>Trực Tinh</strong> Sao tốt trong hệ thống Kim - Phù
                      Tinh, trừ được Kim thần sát
                    </li>
                    <li>
                      <strong>[Nguyệt Đức Hợp]</strong> Tốt mọi việc, kỵ tố tụng
                    </li>
                    <li>
                      <strong>Dân Nhật, Thời Đức</strong> Tốt mọi việc
                    </li>
                    <li>
                      <strong>Hoạt diệu</strong> Tốt nhưng gặp Thụ tử xấu
                    </li>
                    <li>
                      <strong>Tuế hợp</strong> Tốt mọi việc
                    </li>
                    <li>
                      <strong>[Ngọc Đường]</strong> Hoàng đạo tốt mọi việc
                    </li>
                    <li>
                      <strong>[Thiên Thành] (Ngọc đường hoàng đạo)</strong> Tốt mọi
                      việc
                    </li>
                  </ol>
                </div>
              </div>
              <div className="col col6">
                <div className="tieudiengiai">CÁC SAO XẤU</div>
                <div className="saoxau">
                  <ol>
                    <li>
                      <strong>Lục bất thành</strong> Xấu với xây dựng
                    </li>
                    <li>
                      <strong>Nguyệt Hình</strong> Xấu mọi việc
                    </li>
                    <li>
                      <strong>Thiên lai</strong> Xấu mọi việc
                    </li>
                    <li>
                      <strong>Tiểu hao</strong> Xấu kinh doanh, cầu tài
                    </li>
                    <li>
                      <strong>[Thiên Cương]</strong> Xấu mọi việc
                    </li>
                    <li>
                      <strong>[Thủ tử ]</strong> Xấu mọi việc trừ săn bắn
                    </li>
                    <li>
                      <strong>Địa Tặc</strong> Xấu khởi tạo, an táng, động thổ, xuất
                      hành
                    </li>
                    <li>
                      <strong>Xích Khẩu</strong> Kỵ giá thú, giao dịch, yến tiệc
                    </li>
                    <li>
                      <strong>Phạm tứ ly</strong> Một ngày trước Đông chí
                    </li>
                  </ol>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </>

    </>
  )
}

export default PerpetualCalendar
