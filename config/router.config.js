export default [{
    path: '/emr',
    redirect: '/emr/login'
  },
  {
    path: '/emr/login',
    component: './Login/Login'
  },
  {
    path: '/emr/wechatResult',
    component: './Wechat/WechatResult'
  },
  {
    path: '/emr/pacients',
    routes: [{
        path: '/emr/pacients',
        redirect: '/emr/pacients/index'
      },
      {
        path: '/emr/pacients/index',
        component: './Pacients/Pacients'
      },
      {
        path: '/emr/pacients/create',
        component: './Pacients/PacientsCreate'
      },
      {
        path: '/emr/pacients/edit',
        component: './Pacients/PacientsEdit'
      },
      {
        path: '/emr/pacients/create',
        component: './Pacients/PacientsCreate'
      }
    ]
  },
  {
    path: '/emr/diagnosis',
    routes: [{
        path: '/emr/diagnosis',
        redirect: '/emr/diagnosis/index'
      },
      {
        path: '/emr/diagnosis/index',
        component: './Diagnosis/Diagnosis'
      },
      {
        path: '/emr/diagnosis/create',
        component: './Diagnosis/DiagnosisCreate'
      },
      {
        path: '/emr/diagnosis/show',
        component: './Diagnosis/DiagnosisShow'
      }
    ]
  },
  {
    path: '/emr/dashboard/examiner',
    component: './Dashboard/DashboardExaminer'
  },
  {
    path: '/emr/dashboard/pacient',
    component: './Dashboard/DashboardPacient'
  }
];
