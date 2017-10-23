$("#signup").click(function () {
    console.log("this is signup btn click");
  var newuser = {};
//   var id = null;
//   $.get("http://localhost:3000/data", function (data) {   
//       id = data[data.size - 1].id + 1;
//   });
  newuser.id = null;
  newuser.username = $("#username").val();
  newuser.password = $("#password").val();
  newuser.email = $("#email").val();
  newuser.tel = $("#tel").val();
  newuser.status  = $("#status").val();
  console.log(newuser);
  var url = "http://localhost:3000/data";
//   $.post(url, newuser, function (data, status) {
//     alert('Created successfully');
//     console.log("Inserted " + data);
//     setTimeout(window.location.href = "login.html", 1000);
// });
});
