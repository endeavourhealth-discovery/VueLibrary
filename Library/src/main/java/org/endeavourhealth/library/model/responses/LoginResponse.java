package org.endeavourhealth.library.model.responses;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.endeavourhealth.library.model.security.User;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class LoginResponse {

  private User user;
  private String state;
}
