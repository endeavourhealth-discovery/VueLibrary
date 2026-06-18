package org.endeavourhealth.library.model.dto;

import java.util.List;
import lombok.Data;

@Data
public class UserDataDto {

  private String preset;
  private String primaryColor;
  private boolean darkMode;
  private String scale;
  private List<String> organisations;
  private List<String> favourites;
  private List<RecentActivityItemDto> mru;
}
