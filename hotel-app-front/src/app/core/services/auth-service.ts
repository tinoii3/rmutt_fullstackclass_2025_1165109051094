import { computed, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { LoginRequest } from '../../features/auth/models/login-request';
import { LoginResponse } from '../../features/auth/models/login-response';
import { Observable, tap } from 'rxjs';
import { RegisterRequest } from '../../features/auth/models/register-request';
import { RegisterResponse } from '../../features/auth/models/register-response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.apiUrl}/auth/login`, payload).pipe(
      tap((res) => {
        localStorage.setItem('access_token', res.access_token);
        localStorage.setItem('refresh_token', res.refresh_token);
      }),
    );
  }

  register(payload: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.apiUrl}/auth/register`, payload);
  }

  private readonly TOKEN_KEY = 'mock_token';

  private _token = signal<string | null>(localStorage.getItem(this.TOKEN_KEY));

  isLoggedIn = computed(() => !!this._token());

  token = computed(() => this._token());

  loginted(username: string, password: string) {
    if (username && password) {
      const fakeToken = 'mock-jwt-token-123';
      localStorage.setItem(this.TOKEN_KEY, fakeToken);
      this._token.set(fakeToken);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
    this._token.set(null);
  }
}
