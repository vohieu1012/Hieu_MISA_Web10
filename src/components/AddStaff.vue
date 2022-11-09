<template>
  <div class="addnew" >
   
     <div class="form--teacher">
      <div class="teacher--account">
        <div class="teacher--wrap">
          <div class="teacher--account__image">
            <img src="../assets/Icons/ic_Avatar_36.png" alt="" />
          </div>
          <div class="teacher--account__title">
            <p class="title--name">Họ và tên</p>
            <p class="title--number">Số hiệu cán bộ</p>
          </div>
        </div>
      </div>
      <div class="teacher--space"></div>
      <div class="teacher--info">
        <div class="teacher--info__header">
          <div class="teacher--title">
            <h3>Thêm hồ sơ Cán bộ, giáo viên</h3>
          </div>
          <div class="teacher--close">
            <img src="../assets/Icons/ic_X_2.png" alt="" />
          </div>
        </div>
        <div class="teacher--info__main">
          <div class="info--wrap">
            <div class="info--wrap__left">
              <label for="">Số hiệu cán bộ <span>*</span></label>
              <input class="focus" type="text" />
            </div>
            <div class="info--wrap__right">
              <label for="">Họ và tên <span>*</span></label>
              <input class="focus" type="text" />
            </div>
          </div>
          <div class="info--wrap">
            <div class="info--wrap__left">
              <label for="">Số điện thoại</label>
              <input class="focus" type="text" />
            </div>
            <div class="info--wrap__right">
              <label for="">Email </label>
              <input class="focus" type="text" />
            </div>
          </div>
          <div class="info--wrap">
            <div class="info--wrap__left">
              <label for="">Tổ bộ môn</label>
              <div class="multiselect">
                <select 
                  name=""
                  id=""
                  multiple
                  multiselect-select-all="true"
                  multiselect-max-selected="3"
                >
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                  <option value="">1</option>
                  <option value="">2</option>
                  <option value="">3</option>
                </select>
              </div>
            </div>
            <div class="info--wrap__right">
              <label for="">QL theo môn</label>
              <select class="focus" name="" id="">
                <option value="">Toán</option>
                <option value="">Hoá</option>
              </select>
            </div>
          </div>
          <div class="info--wrap">
            <div div class="info--wrap__single">
              <label for="">QL kho,phòng</label>
              <select class="focus" name="" id="">
                <option value="">Phòng Toán Lý</option>
                <option value="">Phòng Hoá Sinh</option>
              </select>
            </div>
          </div>
          <div class="info--status">
            <div class="info--status__level">
              <input class="focus" type="checkbox" />
              <label for="">Trình độ nghiệp vụ QLTB</label>
            </div>
            <div class="info--status__work">
              <input class="focus" type="checkbox" />
              <label for="">Đang làm việc</label>
            </div>
          </div>
        </div>
        <div class="teacher--info__select">
          <div class="select--close">
            <button class="btn btn-active close--form">Đóng</button>
          </div>
          <div class="select--save">
            <button class="btn btn-active">Lưu</button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import select from "../js/layout/multiselect-dropdown.js";

export default {
  components: {},
  mounted() {
    select;
  },
};
</script>
<style scoped>
@import url("../css/add_teacher.css");
@import url("../css/focus");
select {
  width: 220px;
  height: 32px;
}
</style>
