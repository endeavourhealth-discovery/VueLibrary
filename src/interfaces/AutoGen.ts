export interface QueryException extends Exception {}

export interface VocabEnum {}

export interface VocabUtils {}

/**
 * Class representing an IRI
 */

export interface Serializable {}

export interface Throwable extends Serializable {
  cause?: Throwable;
  stackTrace?: StackTraceElement[];
  message?: string;
  suppressed?: Throwable[];
  localizedMessage?: string;
}

export interface StackTraceElement extends Serializable {
  classLoaderName?: string;
  moduleName?: string;
  moduleVersion?: string;
  methodName?: string;
  fileName?: string;
  lineNumber?: number;
  className?: string;
  nativeMethod?: boolean;
}

export interface Exception extends Throwable {}

export interface Comparable<T> {}
