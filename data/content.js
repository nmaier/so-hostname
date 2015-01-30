// Just makes all of contentScriptOptions available to the real website,
// as the |hostInformation| objects.
unsafeWindow.hostInformation = cloneInto(self.options, unsafeWindow);
