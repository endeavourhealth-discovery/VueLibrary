package org.endeavourhealth.library.model.security

import com.fasterxml.jackson.annotation.JsonIgnore
import org.endeavourhealth.library.model.dto.RecentActivityItemDto
import org.endeavourhealth.library.model.primevue.FontSize
import org.endeavourhealth.library.model.primevue.PrimeVueColors
import org.endeavourhealth.library.model.primevue.PrimeVuePresetThemes
import org.endeavourhealth.library.model.workflow.roleRequest.UserRole

class User {
  var id: String = ""
  var username: String = ""
  var email: String = ""
  var displayName: String = ""
  var password: String = ""
    set(value) {
      field = ""
    }
  var avatar: String = ""
  var roles: List<UserRole> = mutableListOf()
  var organisations: List<String> = mutableListOf()
  var theme: PrimeVuePresetThemes = PrimeVuePresetThemes.AURA
  var primaryColor: PrimeVueColors = PrimeVueColors.EMERALD
  var surfaceColor: PrimeVueColors = PrimeVueColors.SLATE
  var darkMode: Boolean = false
  var fontSize: FontSize = FontSize.MEDIUM
  var favourites: List<String> = mutableListOf()
  var recentActivity: List<RecentActivityItemDto> = mutableListOf()
  var namespaces: List<NamespacePermission> = mutableListOf()

  @JsonIgnore
  fun adminSetPassword(password: String) {
    this.password = password
  }
}