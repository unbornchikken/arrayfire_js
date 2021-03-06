/*
Copyright 2015 Gábor Mező aka unbornchikken (gabor.mezo@outlook.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

#include "ext.h"
#include "arrayhelperfunctions.h"
#include "helpers.h"
#include "arraywrapper.h"
#include "errors.h"
#include "guard.h"

using namespace v8;
using namespace std;
using namespace node;

FIRE_SYNC_METHOD_ARR(IsZero, iszero)
FIRE_SYNC_METHOD_ARR(IsInf, isInf)
FIRE_SYNC_METHOD_ARR(IsNaN, isNaN)

void InitArrayHelperFunctions(v8::Handle<v8::Object> exports)
{
    exports->Set(NanNew("iszero"), NanNew<FunctionTemplate>(IsZero)->GetFunction());
    exports->Set(NanNew("isZero"), NanNew<FunctionTemplate>(IsZero)->GetFunction());
    exports->Set(NanNew("isInf"), NanNew<FunctionTemplate>(IsInf)->GetFunction());
    exports->Set(NanNew("isNaN"), NanNew<FunctionTemplate>(IsNaN)->GetFunction());
}
