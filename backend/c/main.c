#include <stdlib.h>
#include <stdio.h>
#include <stdint.h>
#include <string.h>

int64_t hello(char *subject, size_t length)
{
  char *prefix = "Hello ";
  char *suffix = "!";

  int resLen = strlen(prefix) + length + strlen(suffix) + 1; // +1 for null terminator
  char *res = malloc(resLen * sizeof(char));

  snprintf(res, resLen, "%s%s%s", prefix, subject, suffix);

  return ((int64_t)(intptr_t)res << 32) | (int64_t)resLen;
}
