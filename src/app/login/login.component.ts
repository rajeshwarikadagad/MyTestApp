import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;
  isChecked = false;
  wissonicon = "https://doc-14-7g-docs.googleusercontent.com/docs/securesc/3dof2cj1e93p2eims4mt5q3fr6ubvlcv/0eo6p32kdopur23fm9p43salj4hrak7s/1681560750000/12258978775788100312/15624589201428909449/1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH?e=view&ax=ALy03A4jgQdF_Fi2e9Atm5EVhOYAa-FOvy0kHEwWsEkaRb6J8n04j_M_A-pXmjOXldmxd4nZHqfcGjvduS0_yPW0wevjYS7xoFWnBeMomnZOd_uJ0Ob8S_hOYocG2abtiwsO5xYJxqPqA6Xaz0dVuRmZLkKr1sQHSo9cW0jzFxGeYWerMzBa2r73Us7KNPQP5xE15daGwZVPI8NSqItiTnWfoqy8V1mrA62_CdTIjjtmckP2ma_bimRLU_NGFfljnF9gWiSIpvA5KImAl286_ZKuzarqeYKpHUFhN0F0rUqPQNPI3VEikxqV04HaaB4EaZZsw_Bgsni7xKJZsfypWeYtxixMilFu5yDdIpfrqYMpXYDWvXxpdPfz1_Urv4cvM8l1hm9s2GcuxHYReTZq-vnZ2QioEU0IfApt81RiqJZG2UeoiA8P4V9nOHWvBTvXOxfqqy-_qSI2-c0BCStBgnmGmWJEqiITnC25QDPm9r5eSZ5-Cwq3LwNov1t4DCaQRUTc0r48P-DdoxfOUnDCYXu45tV-GgvmOecRcqb5PTdDkcq-8yRqs2qU4kqd8pdlXyHFYXzTxVtLyMzGAjwpC55TcQgQh80zmjAijj09wkT-c4WsGB1RF5iovFdGLBz0B13EbmznE-ntFpQAiB3lmsnpY_AnG86p7U6O0g_E4DOZSwa9CDskOQtFQHhkLZSe6jki8aKlEGN1RgZcm7v61vudJkw5SuU1cHLQUvSIfgiGyULO9H_eUiHYV7_fQBYwcrKDlWKybbsQQoQkNFRXRD5iKfB8Dit17OEPXoR3Ebdpf_4xyJozfzepzz-V-85lPj3npPEuGAjqFlFe7STkJZ5ZKj5ZwsLMniAc2BJaHH7Uq7csfYYlPQgHxYfFGtnTLMo&uuid=6bcd3623-92a9-40ec-b25f-e5e7828b9b31&authuser=0&nonce=l9egn3cgsnk4e&user=15624589201428909449&hash=5v2tpuid082hllntklkc6olp344l9rmo";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    // private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    // setup the loginform and validators
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]

    });
  }
  get formControls() {
    return this.loginForm.controls;
  }
  ngOnDestroy() {}

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      // window.alert('All the fields are Required');
      return
    }
    // 
  }

  // implement the username validator. Min 6 characters and no digits, special chars
  usernameValidator() {
    return false;
  }

  // implement the password validator
  // Min 1 uppercase, 1 lower case and a digit. Total length >= 8
  passwordValidator() {
    return false;
  }
}
