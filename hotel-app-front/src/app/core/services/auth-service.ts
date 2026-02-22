import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly TOKEN_KEY = 'mock_token';

  private _token = signal<string | null>(
    localStorage.getItem(this.TOKEN_KEY)
  );

  isLoggedIn = computed(() => !!this._token());

  token = computed(() => this._token());

  login(username: string, password: string) {
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
