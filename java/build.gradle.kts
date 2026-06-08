import cz.habarta.typescript.generator.*

plugins {
  // Support convention plugins written in Groovy. Convention plugins are build scripts in 'src/main' that automatically become available as plugins in the main build.
  alias(libs.plugins.sonar)
  id("java")
  id("jacoco")
  id("war")
  alias(libs.plugins.typescript.generator)
  alias(libs.plugins.static.const.generator)
  alias(libs.plugins.typescript.const.enum.to.enum)
  alias(libs.plugins.extract.enums.from.auto.gen)
  id("java-library")
  id("maven-publish")
  kotlin("jvm")
  kotlin("plugin.spring") version "2.2.20"
}

group = "org.endeavourhealth.library"
version = "1.0-SNAPSHOT"
description = "Java library"


repositories {
  gradlePluginPortal()
  mavenCentral()
}

val ENV = System.getenv("ENV") ?: "dev"
println("Build environment = [$ENV]")

val CI = System.getenv("CI") ?: "false"
if (CI == "false") {
  tasks.named<JavaCompile>("compileJava") {
    dependsOn("staticConstGenerator")
  }
} else {
  tasks.build { finalizedBy("publish") }
}

publishing {
  publications {
    create<MavenPublication>("mavenJava") {
      from(components["java"])
    }
  }
  repositories {
    maven {
      url = uri("https://artifactory.endhealth.co.uk/repository/maven-snapshots")
      credentials {
        username = System.getenv("MAVEN_USERNAME")
        password = System.getenv("MAVEN_PASSWORD")
      }
    }
  }
}

tasks.war {
  archiveFileName.set("javalibrary.war")
}

tasks.generateTypeScript {
  jsonLibrary = JsonLibrary.jackson2
  outputFileType = TypeScriptFileType.implementationFile
  optionalProperties = OptionalProperties.useLibraryDefinition
  classPatterns = listOf(
    "org.endeavourhealth.library.model.DataModelProperty",
    "org.endeavourhealth.library.model.requests.*",
    "org.endeavourhealth.library.model.responses.*",
    "org.endeavourhealth.library.model.iml.*",
    "org.endeavourhealth.library.model.search.*",
    "org.endeavourhealth.library.model.set.EclSearchRequest",
    "org.endeavourhealth.library.model.set.SetOptions",
    "org.endeavourhealth.library.model.set.SetExportRequest",
    "org.endeavourhealth.library.model.imq.*",
    "org.endeavourhealth.library.model.eclBuilder.*",
    "org.endeavourhealth.library.model.workflow.*",
    "org.endeavourhealth.library.model.workflow.**.*",
    "org.endeavourhealth.library.model.DownloadEntityOptions",
    "org.endeavourhealth.library.model.EntityReferenceNode",
    "org.endeavourhealth.library.model.tripletree.TTDocument",
    "org.endeavourhealth.library.model.tripletree.TTEntity",
    "org.endeavourhealth.library.model.Pageable",
    "org.endeavourhealth.library.model.ConceptContextMap",
    "org.endeavourhealth.library.model.validation.EntityValidationRequest",
    "org.endeavourhealth.library.model.tripletree.TTDocument",
    "org.endeavourhealth.library.model.ConceptContextMap",
    "org.endeavourhealth.library.model.dto.CodeGenDto",
    "org.endeavourhealth.library.model.postgres.*",
    "org.endeavourhealth.library.model.editor.*",
    "org.endeavourhealth.library.model.Namespace",
    "org.endeavourhealth.library.vocabulary.*",
    "org.endeavourhealth.library.model.sql.SubQueryDependency",
    "org.endeavourhealth.library.model.github.REPO"
  )
  outputFile = "../src/interfaces/AutoGen.ts"
  outputKind = TypeScriptOutputKind.module
  mapEnum = EnumMapping.asEnum
  customTypeNaming = listOf(
    "org.endeavourhealth.library.model.security.NamespacePermission:NamespacePermissionJava",
    "org.endeavourhealth.library.model.security.User:UserJava"
  )

}

tasks {
  staticConstGenerator {
    inputJson = "vocab.json"
      packagePath = "org.endeavourhealth.library"
    javaOutputFolder = "src/main/java/org/endeavourhealth/library/vocabulary/"
  }
}

typescriptConstEnumToEnum {
  filePath.set("../src/interfaces/AutoGen.ts")
}

extractEnumsFromAutoGen {
  inputFile.set("../src/interfaces/AutoGen.ts")
  outputFile.set("../src/enums/AutoGen.ts")
}

dependencies {
  implementation(libs.angus.mail)
  implementation(libs.antlr)
  implementation(libs.apache.collections4)
  implementation(libs.apache.poi)
  implementation(libs.apache.text)
  implementation(libs.apache.commons.text)
  implementation(libs.assert.j)
  implementation(libs.aws.sdk.bom)
  implementation(libs.aws.sdk.core)
  implementation(libs.aws.s3)
  implementation(libs.dropwizard)
  implementation(libs.dropwizard.graphite)
  implementation(libs.dropwizard.servlets)
  implementation(libs.fact.plus.plus)
  implementation(libs.jackson.databind)
  implementation(libs.jackson.kotlin)
  implementation(libs.logback.core)
  implementation(libs.logback.classic)
  implementation(libs.elasticsearch)
  implementation(libs.hapi.fhir.r4)
  implementation(libs.jersey.client)
  implementation(libs.jersey.inject)
  implementation(libs.owl.api)
  implementation(libs.open.llet)
  implementation(libs.reactor.core)
  implementation(libs.rdf4j.common)
  implementation(libs.rdf4j.query)
  implementation(libs.rdf4j.iterator)
  implementation(libs.rdf4j.repo.api)
  implementation(libs.rdf4j.repo.http)
  implementation(libs.rdf4j.repo.sail)
  implementation(libs.rdf4j.sail.native)
  implementation(libs.slf4j)
  implementation(libs.spring.context)
  implementation(libs.spring.data.jpa)
  implementation(libs.spring.oauth.server)
  implementation(libs.spring.security)
  implementation(libs.spring.web)
  implementation(libs.springdoc)
  implementation(libs.validation)
  implementation(libs.woodstox)
  implementation(libs.wsrs)

  runtimeOnly(libs.spring.dev.tools)

  testImplementation(libs.cucumber)
  testImplementation(libs.cucumber.junit)
  testImplementation(libs.cucumber.spring)
  testImplementation(libs.junit)
  testImplementation(libs.junit.suite)
  testImplementation(libs.mockito)
  testImplementation(libs.spring.test)
  testImplementation(libs.spring.test.security)
  testImplementation(libs.system.stubs)

  providedCompile(libs.spring.tomcat)

  compileOnly(libs.jackson.annotations)
  compileOnly(libs.lombok)

  annotationProcessor(libs.jackson.annotations)
  annotationProcessor(libs.lombok)
  implementation(kotlin("stdlib-jdk8"))
}

repositories {
  mavenLocal()
  mavenCentral()
  maven {
    url = uri("https://artifactory.endhealth.co.uk/repository/maven-releases")
  }
  maven {
    url = uri("https://artifactory.endhealth.co.uk/repository/maven-snapshots")
  }
}

tasks.test {
  jvmArgs("-XX:+EnableDynamicAgentLoading")
  useJUnitPlatform {
    excludeTags("IMQTest", "IMQFullTest")
  }
  finalizedBy("jacocoTestReport")
}

tasks.jacocoTestReport {
  reports {
    xml.required.set(true)
  }
}


kotlin {
  jvmToolchain(21)
}