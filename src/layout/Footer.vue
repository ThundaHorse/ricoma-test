<template>
  <div class="mainFooter">
    <footer id="footer" class="footer">
      <div class="main-footer">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-3">
              <img
                class="footerLogo"
                src="../assets/pictures/Li Logo.svg"
                alt="liLogo"
              />
            </div>
            <div class="col-xs-12 col-sm-6 col-md-1 mt-4" style="width: 132px;">
              <h5 class="link-title">Lorem Ipsum<span></span></h5>
              <ul class="sub-links">
                <li>
                  <div class="sub-content">
                    <span class="subLink">Lorem Ipsum</span>
                  </div>
                </li>
                <li>
                  <div class="sub-content">
                    <span class="subLink">Lorem Ipsum</span>
                  </div>
                </li>
                <li>
                  <div class="sub-content">
                    <span class="subLink">Lorem Ipsum</span>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-1 mt-4" style="width: 132px;">
              <div class="widget no-box">
                <h5 class="link-title">Lorem Ipsum<span></span></h5>
                <ul class="sub-links">
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-xs-12 col-sm-6 col-md-1 mt-4" style="width: 132px;">
              <div class="widget no-box">
                <h5 class="link-title">Lorem Ipsum<span></span></h5>
                <ul class="sub-links">
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                  <li>
                    <div class="sub-content">
                      <span class="subLink">Lorem Ipsum</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
.mainFooter {
  height: 244px;
  background-color: #000000;
}
.footerLogo {
  height: 146px;
  width: 146px;
  margin-left: 100px;
  margin-top: 39px;
}
#footerImage {
  padding-left: 100px;
  padding-top: 39px;
}
.link-title {
  height: 41px;
  width: 109px;
  color: #f6437d;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 800;
  line-height: 41px;
}
.subLink {
  height: 41px;
  width: 90px;
  color: #ffffff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 300;
  line-height: 41px;
}
.sub-links {
  padding: 0;
}
li {
  list-style: none;
}
</style>

<script>
export default {
  name: "mainFooter",
  data: function() {
    return {};
  },
  created: function() {},
  methods: {}
};
</script>
